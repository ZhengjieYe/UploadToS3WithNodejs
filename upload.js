const fs = require('fs');
const AWS = require('aws-sdk');

const uploadFile = (fileName) => {
    // Read content from the file
    const fileContent = fs.readFileSync(fileName);
    const s3 = new AWS.S3({
        accessKeyId: process.env.ID,
    });
    // Setting up S3 upload parameters
    const params = {
        Bucket: "test-bucket-for-whoever",
        Key: fileName, // File name you want to save as in S3
        Body: fileContent
    };

    // Uploading files to the bucket
    s3.upload(params, function(err, data) {
        if (err) {
            throw err;
        }
        console.log(`File uploaded successfully. ${data.Location}`);
    });
};

uploadFile('index.html');