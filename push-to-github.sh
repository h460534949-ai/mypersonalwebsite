#!/bin/bash

# Script to push website code to GitHub
echo "Pushing website code to GitHub..."

cd /Users/andy/Documents/Basic

# Initialize git repository
git init

# Add all files
git add .

# Commit with message
git commit -m "Initial commit - Alex Chen portfolio website"

# Set branch name
git branch -M main

# Add remote repository
git remote add origin https://github.com/h460534949-ai/mypersonalwebsite.git

# Push to GitHub
git push -u origin main

echo "Done! Your code has been pushed to GitHub."
