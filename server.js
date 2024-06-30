
// Importing required modules using CommonJS syntax
const express = require('express');
const mysql = require('mysql2'); // Using mysql library
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MySQL Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '22071A3210', // Replace with your actual password
  database: 'fieldproject' // Replace with your actual database name

});

db.connect(err => {
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

  const sql = `
    INSERT INTO publicationform (
      publicationId, publicationTitle, publicationType, conferenceOrJournal, conferenceName,
      journalName, volumeNumber, pageNumber, issueNumber, levelOfCirculation, dateOfPublication,
      indexedIn, indexProof, ISSNnumber, impactFactor, Scoups, webOfScience, SCI, UCGRated,
      ugcProof, hIndex, citationCnt, affiliatingInstitute, publisherName, paperLink, journalLink,
      proof, orcidId, vidwanId, technology, domain, branch, Industry, ForeignAuthor, PublicationStatus,
      StudentPresence, BestPaperAwarded, Q1Q2Q3Q4, facultyName, facultyId, designation, dept,
      authorId1, authorId2, authorId3, authorId4, authorId5, authorId6, authorId7, forIndexing,
      ugcCiting, proofDoc
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
              ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    publicationId, publicationTitle, publicationType, conferenceOrJournal, conferenceName,
    journalName, volumeNumber, pageNumber, issueNumber, levelOfCirculation, dateOfPublication,
    indexedIn, indexProof, ISSNnumber, impactFactor, Scoups, webOfScience, SCI, UCGRated,
    ugcProof, hIndex, citationCnt, affiliatingInstitute, publisherName, paperLink, journalLink,
    proof, orcidId, vidwanId, technology, domain, branch, Industry, ForeignAuthor, PublicationStatus,
    StudentPresence, BestPaperAwarded, Q1Q2Q3Q4, facultyName, facultyId, designation, dept,
    authorId1, authorId2, authorId3, authorId4, authorId5, authorId6, authorId7, forIndexing,
    ugcCiting, proofDoc
  ];

  db.query(sql, values, (err, results) => {
    if (err) {
      console.error('Error inserting publication:', err);
      return res.status(500).send(err);
    }
    res.json({ id: results.insertId });
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
