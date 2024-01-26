import {
    ListObjectsCommand,
    S3Client,
  } from "@aws-sdk/client-s3";
  import { fromCognitoIdentityPool } from "@aws-sdk/credential-providers";
  import { useEffect, useState } from "react";

  export default function AwsGetAssets() {
    const [objects, setObjects] = useState([]);
  
    useEffect(() => {
      const client = new S3Client({
        region: "il-central-1",
        credentials: fromCognitoIdentityPool({
          clientConfig: { region: "il-central-1" },
          identityPoolId: "il-central-1:965c9b9d-d7ee-409a-bd9d-b412486ffb5f",
        }),
      });
      const command = new ListObjectsCommand({ Bucket: "portfolioassetsomri" });
      client.send(command).then(({ Contents }) => setObjects(Contents || []));
    }, []);
    return (
        <>
            {objects.map((elem)=>(
                <p>{elem}</p>
            ))}
        </>
    )
  }  