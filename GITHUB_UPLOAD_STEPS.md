# HOW TO UPLOAD THIS WEBSITE TO YOUR GITHUB REPOSITORY

You have two options.

============================================================
OPTION 1 — SIMPLE UPLOAD FROM GITHUB WEBSITE
============================================================

1. Download and extract this ZIP file.

2. Open this folder:

   aazad-mir.github.io-main

3. Inside it, you should see files like:

   index.html
   style.css
   script.js
   assets
   images
   README.md
   WHERE_TO_CHANGE_CONTENT.md
   .nojekyll

4. Open your GitHub repository:

   https://github.com/aazad-mir/aazad-mir.github.io

   If your repository URL is different, open your own repo.

5. Delete the old files from GitHub if needed, especially the old index.html.

6. Click:

   Add file > Upload files

7. Drag and drop ALL files and folders from inside:

   aazad-mir.github.io-main

   Important:
   Upload the CONTENTS of the folder, not the outer folder itself.

8. At the bottom, write commit message:

   Update portfolio website

9. Choose:

   Commit directly to the main branch

10. Click:

   Commit changes


============================================================
OPTION 2 — USING GIT COMMANDS
============================================================

1. Extract the ZIP.

2. Open PowerShell or VS Code terminal.

3. Go inside the folder:

   cd path\to\aazad-mir.github.io-main

4. If this folder is already connected to GitHub, run:

   git status
   git add .
   git commit -m "Update portfolio website"
   git push origin main

5. If it is not connected, clone your repo first:

   git clone https://github.com/aazad-mir/aazad-mir.github.io.git

6. Copy all files from this new portfolio folder into the cloned repo folder.

7. Then run:

   git add .
   git commit -m "Update portfolio website"
   git push origin main


============================================================
ENABLE GITHUB PAGES
============================================================

1. Go to your GitHub repository.

2. Click:

   Settings

3. In the left sidebar, click:

   Pages

4. Under Build and deployment:

   Source: Deploy from a branch
   Branch: main
   Folder: /root

5. Click Save.

6. Wait 1–5 minutes.

7. Your website should open at:

   https://aazad-mir.github.io


============================================================
AFTER UPLOAD
============================================================

Check these:

1. Open the website link.
2. Test English / Arabic buttons.
3. Test mobile view.
4. Test CV button.
5. Test LinkedIn button.
6. Test WhatsApp button.
7. Press Ctrl + K and test command palette.
8. Scroll the full page and check animations.


============================================================
WHERE TO CHANGE CONTENT LATER
============================================================

Open:

   WHERE_TO_CHANGE_CONTENT.md

It explains where to edit your text, images, CV, LinkedIn, WhatsApp, and highlights.
