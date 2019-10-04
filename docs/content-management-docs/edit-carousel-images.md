# How to update carousel images

For any markdown file that supports carousel images (COS Facility and Sustain KR/Cx pages), the images must be places in the same directory as the markdown file. The file name for the images must also have no spaces or parantheses.

## Add a new picture to the carousel

1. Make sure the images file name has no spaces or parentheses.
2. Place the image in the same directory as the markdown file you are associating this image with.
3. Refer to this image in the markdown as seen below
   - ```
       carousel_images:
         - ./image_file_name.jpg
     ```
4. This image should now show up in the carousel

## Delete a picure from the carousel

1. Remove the markdown reference to the image, delete the whole line. Below shows the before and after
   - ```
       // Before deletion
       carousel_images:
         - ./image_i_want_to_remove.jpg
         - ./image_file_name.jpg
     ```
   - ```
       // After deletion
       carousel_images:
         - ./image_file_name.jpg
     ```
2. You can then delete the image from the folder if you never want to use it again or you can leave it in the folder for future purposes
