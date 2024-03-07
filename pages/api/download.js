// pages/api/download.js

import fs from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";

export default (req, res) => {
  // Replace 'example.pdf' with the actual filename
  const filename = "resume.pdf";
  const filePath = path.join(
    process.cwd(),
    "public",
    "path-to-files",
    filename
  );

  // Check if the file exists
  if (!fs.existsSync(filePath)) {
    return res.status(404).end("File not found");
  }

  // Set the appropriate headers for download
  res.setHeader("Content-disposition", `attachment; filename=${filename}`);
  res.setHeader("Content-type", "application/pdf");

  // Create a readable stream from the file and pipe it to the response
  const stream = fs.createReadStream(filePath);
  stream.pipe(res);
};
