// pdfs merging code
const PDFMerger = require('pdf-merger-js');

var merger = new PDFMerger();

const mergePdfs=async (p1,p2) => {
  await merger.add(p1);  //merge all pages. parameter is the path to file and filename.
  await merger.add(p2); // 
  let timeStamp=new Date().getTime()

  await merger.save(`public/${timeStamp}.pdf`); //save under given name and reset the internal document
  return timeStamp;
  
  // Export the merged PDF as a nodejs Buffer
  // const mergedPdfBuffer = await merger.saveAsBuffer();
  // fs.writeSync('merged.pdf', mergedPdfBuffer);
};

module.exports={mergePdfs};