import os 
  
# Function to rename multiple files 
def main(): 
    i = 0
      
    for filename in os.listdir("images"): 
        dst ="ronak" + str(i) + ".jpg"
        src ='images/'+ filename 
        dst ='images/'+ dst 
          
        # rename() function will 
        # rename all the files 1
        os.rename(src, dst) 
        i += 1
  
# Driver Code 
if __name__ == '__main__': 
      
    # Calling main() function 
    main() 