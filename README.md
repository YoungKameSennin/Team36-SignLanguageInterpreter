# Team36-SignLanguageInterpreter
### This is an American Sign language interpretor, it interpret the image and outputs correspounding sign characters.


In order to run this frontend on your end, you need to at least install tensorflow, flask and other python libraries imported in interpreter.ipynb <br>


### Instruction on running the model:
1.Run interpreter.ipynb once, obtain sign_language_model.h5 file in the same directory. ($ python interpreter.py)<br>
2.Run app.py on terminal. ($ python app.py)<br>
3.Open a browser, type localhost:9999 in the url bar to obtain the html interface.<br>
4.Follow the instructions on web and upload a picture. <br>
5.Our model will predict the result on the screen and store the uploaded picture in upload_file folder.<br>


### Files:
#### data.ipynb:
Interpret the dataset by obtaining number of members in each classes and showing simple demo of our dataset. <br>
#### interpreter.ipynb:
Define model achitectures, train model, predict model and compares accuracies and losses, indicating accuracy growth each epoch.
#### static:
A folder contains .js .css files. These files define the style of our frontend
#### upload_file:
A folder contains all uploaded images that were predicted by our model.
#### asl_dataset:
This is the dataset we used for training
#### app.py:
Using flask to connect our UI to localhost:9999
