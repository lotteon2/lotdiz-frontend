import AWS from 'aws-sdk'

const albumBucketName = import.meta.env.VUE_APP_BUCKET_NAME
const bucketRegion = import.meta.env.VUE_APP_BUCKET_REGION
const IdentityPoolId = import.meta.env.VUE_APP_IDENTITY_POOLID

AWS.config.update({
  region: bucketRegion,
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: IdentityPoolId
  })
})

const s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  params: { Bucket: albumBucketName }
})