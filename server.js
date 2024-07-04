const express = require('express');
const mysql = require('mysql2'); 
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Welcome@123', 
  database: 'aditya'

});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});



app.post('/publicationform', (req, res) => {
  const {
    publicationId,
    publicationTitle,
    publicationType,
    conferenceOrJournal,
    conferenceName,
    journalName,
    volumeNumber,
    pageNumber,
    issueNumber,
    levelOfCirculation,
    dateOfPublication,
    indexedIn,
    indexProof,
    ISSNnumber,
    impactFactor,
    Scoups,
    webOfScience,
    SCI,
    UCGRated,
    ugcProof,
    hIndex,
    citationCnt,
    affiliatingInstitute,
    publisherName,
    paperLink,
    journalLink,
    proof,
    orcidId,
    vidwanId,
    technology,
    domain,
    branch,
    Industry,
    ForeignAuthor,
    PublicationStatus,
    StudentPresence,
    BestPaperAwarded,
    Q1Q2Q3Q4,
    facultyName,
    facultyId,
    designation,
    dept,
    authorId1,
    authorId2,
    authorId3,
    authorId4,
    authorId5,
    authorId6,
    authorId7,
    forIndexing,
    ugcCiting,
    proofDoc
  } = req.body;

  const sql = ' INSERT INTO publications ( publicationId, publicationTitle, publicationType, conferenceOrJournal, conferenceName, journalName, volumeNumber, pageNumber, issueNumber, levelOfCirculation, dateOfPublication, indexedIn, indexProof, ISSNnumber, impactFactor, Scoups, webOfScience, SCI, UCGRated, ugcProof, hIndex, citationCnt, affiliatingInstitute, publisherName, paperLink, journalLink, proof, orcidId, vidwanId, technology, domain, branch, Industry, ForeignAuthor, PublicationStatus, StudentPresence, BestPaperAwarded, Q1Q2Q3Q4, facultyName, facultyId, designation, dept, authorId1, authorId2, authorId3, authorId4, authorId5, authorId6, authorId7, forIndexing, ugcCiting, proofDoc ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

  const values = [
    publicationId || null , publicationTitle || null, publicationType || null, conferenceOrJournal || null, conferenceName || null,
    journalName || null, volumeNumber || null, pageNumber || null, issueNumber || null, levelOfCirculation || null, dateOfPublication || null,
    indexedIn || null, indexProof || null, ISSNnumber || null, impactFactor || null, Scoups || null, webOfScience || null, SCI || null, UCGRated || null,
    ugcProof || null, hIndex || null, citationCnt || null, affiliatingInstitute || null, publisherName || null, paperLink || null, journalLink || null,
    proof || null, orcidId || null, vidwanId || null, technology || null, domain || null, branch || null, Industry || null, ForeignAuthor || null, PublicationStatus || null,
    StudentPresence || null, BestPaperAwarded || null, Q1Q2Q3Q4 || null, facultyName || null, facultyId || null, designation || null, dept || null,
    authorId1 || null, authorId2 || null, authorId3 || null, authorId4 || null, authorId5 || null, authorId6 || null, authorId7 || null, forIndexing || null,
    ugcCiting || null, proofDoc || null
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting publication:', err);
      return res.status(500).send(err);
    }
    res.json({ id: result.insertId });
    console.log("Data inserted successfully")
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
