#!/bin/sh

echo "Starting Xvfb..."
# Startup Xvfb
Xvfb -ac :99 -screen 0 1280x1024x16 > /dev/null 2>&1 &

# Export some variables
export DISPLAY=:99.0

# Run commands
cmd=$*
echo "Running 'yarn $cmd'..."
if yarn "$cmd"; then
  # no op
  echo "Successfully ran 'yarn $cmd'"
else
  exit_code=$?
  echo "Failure running 'yarn $cmd', exited with $exit_code"
  exit $exit_code
fi
