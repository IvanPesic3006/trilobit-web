Add-Type -AssemblyName System.Drawing

$inputPath = Join-Path $PSScriptRoot '..\public\logo.JPG'
$outputPath = Join-Path $PSScriptRoot '..\public\favicon.png'
$applePath = Join-Path $PSScriptRoot '..\public\apple-touch-icon.png'
$headerLogoPath = Join-Path $PSScriptRoot '..\public\logo-icon.png'

function IsNearWhite([System.Drawing.Color]$c) {
  return ($c.A -gt 0 -and $c.R -gt 235 -and $c.G -gt 235 -and $c.B -gt 235)
}

$src = [System.Drawing.Bitmap]::FromFile($inputPath)
$bmp = New-Object System.Drawing.Bitmap $src.Width, $src.Height

$minX = $src.Width
$minY = $src.Height
$maxX = 0
$maxY = 0

for ($y = 0; $y -lt $src.Height; $y++) {
  for ($x = 0; $x -lt $src.Width; $x++) {
    $pixel = $src.GetPixel($x, $y)
    if (IsNearWhite $pixel) {
      $bmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
    } else {
      $bmp.SetPixel($x, $y, $pixel)
      if ($x -lt $minX) { $minX = $x }
      if ($y -lt $minY) { $minY = $y }
      if ($x -gt $maxX) { $maxX = $x }
      if ($y -gt $maxY) { $maxY = $y }
    }
  }
}

$width = $maxX - $minX + 1
$height = $maxY - $minY + 1
$cropped = New-Object System.Drawing.Bitmap $width, $height
$graphics = [System.Drawing.Graphics]::FromImage($cropped)
$graphics.Clear([System.Drawing.Color]::Transparent)
$graphics.DrawImage(
  $bmp,
  (New-Object System.Drawing.Rectangle 0, 0, $width, $height),
  (New-Object System.Drawing.Rectangle $minX, $minY, $width, $height),
  [System.Drawing.GraphicsUnit]::Pixel
)
$graphics.Dispose()

function Save-SizedBitmap($bitmap, $path, $size) {
  $out = New-Object System.Drawing.Bitmap $size, $size
  $g = [System.Drawing.Graphics]::FromImage($out)
  $g.Clear([System.Drawing.Color]::Transparent)
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
  $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $padding = [int]($size * 0.06)
  $g.DrawImage($bitmap, $padding, $padding, $size - 2 * $padding, $size - 2 * $padding)
  $g.Dispose()
  $out.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
  $out.Dispose()
}

Save-SizedBitmap $cropped $outputPath 64
Save-SizedBitmap $cropped $applePath 180
Save-SizedBitmap $cropped $headerLogoPath 120

$src.Dispose()
$bmp.Dispose()
$cropped.Dispose()

Write-Output 'created favicon files'
