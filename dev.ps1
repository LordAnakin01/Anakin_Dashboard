while ($true) {
    Write-Host "Starting Next.js development server..."
    npm run dev
    Write-Host "Server stopped. Restarting in 2 seconds..."
    Start-Sleep -Seconds 2
} 