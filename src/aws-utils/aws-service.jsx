export{}
// import {
//     ListObjectsCommand,
//     ListObjectsCommandOutput,
//     S3Client,
//   } from "@aws-sdk/client-s3";
//   import { fromCognitoIdentityPool } from "@aws-sdk/credential-providers";
//   import { useEffect, useState } from "react";

//   const awsGetAssets = () => {
//     const [objects, setObjects] = useState([]);
  
//     useEffect(() => {
//       const client = new S3Client({
//         region: "us-east-1",
//         // Unless you have a public bucket, you'll need access to a private bucket.
//         // One way to do this is to create an Amazon Cognito identity pool, attach a role to the pool,
//         // and grant the role access to the 's3:GetObject' action.
//         //
//         // You'll also need to configure the CORS settings on the bucket to allow traffic from
//         // this example site. Here's an example configuration that allows all origins. Don't
//         // do this in production.
//         //[
//         //  {
//         //    "AllowedHeaders": ["*"],
//         //    "AllowedMethods": ["GET"],
//         //    "AllowedOrigins": ["*"],
//         //    "ExposeHeaders": [],
//         //  },
//         //]
//         //
//         credentials: fromCognitoIdentityPool({
//           clientConfig: { region: "us-east-1" },
//           identityPoolId: "<YOUR_IDENTITY_POOL_ID>",
//         }),
//       });
//       const command = new ListObjectsCommand({ Bucket: "bucket-name" });
//       client.send(command).then(({ Contents }) => setObjects(Contents || []));
//     }, []);
//   }  