import React, { useEffect, useState } from "react";
import { ListObjectsV2Command, GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-providers";

const client = new S3Client({
  region: "il-central-1",
  credentials: fromCognitoIdentityPool({
    clientConfig: { region: "il-central-1" },
    identityPoolId: "il-central-1:965c9b9d-d7ee-409a-bd9d-b412486ffb5f",
  }),
});

const AwsGetAssets = () => {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const readObjects = async () => {
      try {
        const { Contents } = await client.send(new ListObjectsV2Command({ Bucket: "portfolioassetsomri" }));

        const promises = Contents.map(async (obj) => {
          const command = new GetObjectCommand({
            Bucket: "portfolioassetsomri",
            Key: obj.Key,
          });
          const response = await client.send(command);
          const body = await response.Body.getReader().read();
          const imageUrl = URL.createObjectURL(new Blob([body.value], { type: 'image/jpeg' }));
          return imageUrl;
        });

        Promise.all(promises).then((urls) => {
          setImageUrls(urls);
        });
      } catch (err) {
        console.error(err);
      }
    };

    readObjects();
  }, []);

  return (
    <>
      {imageUrls.map((url, index) => (
        <div key={index}>
          <img src={url} alt={`Image ${index}`} />
        </div>
      ))}
    </>
  );
};

export default AwsGetAssets;
