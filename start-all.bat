@echo off
REM Start backend in a new terminal window
start "Backend" cmd /k "cd backend && npm run start:dev"

REM Wait a few seconds for backend to start
ping 127.0.0.1 -n 6 > nul

REM Start frontend in a new terminal window
start "Frontend" cmd /k "npm run dev" 