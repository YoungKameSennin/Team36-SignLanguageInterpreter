from flask import Flask, request, render_template
from werkzeug.utils import secure_filename
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import load_img, img_to_array
import os
import base64
import numpy as np

app = Flask(__name__)


def predict_image(image_path):

    model = load_model('sign_language_model.h5')

    # Load the image file
    img = load_img(image_path, target_size=(160,160))

    # Preprocess the image - these steps might change depending on your model
    img = img_to_array(img)
    img = img.reshape((1, img.shape[0], img.shape[1], img.shape[2]))

    # Predict using your model
    prediction = model.predict(img)
    index = np.argmax(prediction)  
    if index <= 9:
        output = str(index)
    else:
        index += 87
        output = chr(index)
    return output

#This is home page
@app.route('/')
def home():
    return render_template('index.html')

# This route will handle the upload
@app.route('/upload', methods=['POST'])
def upload_file():

    if 'file' not in request.files:
        return 'No file part', 404
    f = request.files['file']

    # If the user does not select a file, the browser may
    # submit an empty file without a filename.
    if f.filename == '':
        return 'No selected file', 404
    
    cwd = os.getcwd()
    cwd = cwd + '/upload_file' 
    
    filename = secure_filename(f.filename)
    filepath = os.path.join(cwd, filename)
    f.save(filepath)

    output = predict_image(filepath)
    output = "Result: " + output

    # Open the saved image file
    with open(filepath, "rb") as img_file:
        # Encode the image into base64
        encoded_string = base64.b64encode(img_file.read()).decode('utf-8')

    # Delete the saved image after it's encoded to base64
    #os.remove(filepath)

    # return render_template('result.html', result = output, image_data = encoded_string)
    return output

if __name__ == '__main__':
    app.run(host='localhost', port=9999)
