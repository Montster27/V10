# Git Setup Instructions for Middle Age Multiverse

This document provides instructions for setting up Git version control for this project and pushing it to GitHub.

## Initialize Git Repository

From the terminal, navigate to the project directory:

```bash
cd /Users/montysharma/Documents/V10/simplified
```

Initialize a new Git repository:

```bash
git init
```

## Add Files to Git Repository

Add all project files to the staging area:

```bash
git add .
```

## Create Initial Commit

Create the first commit with all project files:

```bash
git commit -m "Initial commit of simplified Middle Age Multiverse game"
```

## Add Remote Repository

Connect your local repository to the GitHub repository:

```bash
git remote add origin https://github.com/Montster27/V10.git
```

## Push to GitHub

Push your code to the GitHub repository:

```bash
git push -u origin main
```

Or if the default branch is 'master':

```bash
git push -u origin master
```

Note: You may need to authenticate with GitHub when pushing. Use your GitHub credentials when prompted.

## Alternative: Clone Existing Repository (If Starting From Scratch)

If you prefer to clone the repository first and then add your files:

```bash
git clone https://github.com/Montster27/V10.git
cd V10
# Copy all project files here
git add .
git commit -m "Initial commit of simplified Middle Age Multiverse game"
git push origin main
```

## Checking Repository Status

To check the status of your repository:

```bash
git status
```

This will show you which files are staged, modified, or untracked.
