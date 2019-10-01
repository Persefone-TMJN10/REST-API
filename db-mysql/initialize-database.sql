CREATE TABLE IF NOT EXISTS session (
    id INT AUTO_INCREMENT NOT NULL,
    tagId VARCHAR(255) NOT NULL, 
    inTime DATETIME NOT NULL,
    outTime DATETIME DEFAULT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS startEnvironment (
    id INT AUTO_INCREMENT NOT NULL,
    sessionId INT NOT NULL,
    radiationLevel INT NOT NULL,
    hazmatStatus BIT NOT NULL,
    roomId ENUM("0", "1", "2") NOT NULL,
    FOREIGN KEY (sessionId) REFERENCES session(id),
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS radiationLevelChange (
    id INT AUTO_INCREMENT NOT NULL,
    level INT NOT NULL,
    time DATETIME NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS hazmatChange (
    id INT AUTO_INCREMENT NOT NULL,
    sessionId INT NOT NULL,
    status BIT NOT NULL,
    time DATETIME NOT NULL,
    FOREIGN KEY (sessionId) REFERENCES session(id),
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS roomChange (
    id INT AUTO_INCREMENT NOT NULL,
    sessionId INT NOT NULL,
    roomId ENUM("0","1","2") NOT NULL,
    time DATETIME NOT NULL,
    FOREIGN KEY (sessionId) REFERENCES session(id),
    PRIMARY KEY (id)
);