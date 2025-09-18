CREATE TABLE USER (id_USER INT(64) AUTO_INCREMENT NOT NULL, 
                   email_USER VARCHAR(64), 
                   pseudo_USER VARCHAR(64), 
                   created_at_USER DATE, 
                   password_USER VARCHAR(64), 
                   PRIMARY KEY (id_USER)) ENGINE=InnoDB;
                   
CREATE TABLE SESSION (id_SESSION INT(64) AUTO_INCREMENT NOT NULL, 
                      token_SESSION VARCHAR(64), 
                      created_at_SESSION DATE, 
                      expires_at_SESSION DATE, 
                      user_agent_SESSION VARCHAR(224),
                      PRIMARY KEY (id_SESSION)) ENGINE=InnoDB;
                  
CREATE TABLE PLAYLIST (id_PLAYLIST INT(64) AUTO_INCREMENT NOT NULL, 
                       name_PLAYLIST VARCHAR(224), 
                       created_at_PLAYLIST DATE, 
                       updated_at_PLAYLIST DATE, 
                       is_public_PLAYLIST TINYINT(1),
                       PRIMARY KEY (id_PLAYLIST)) ENGINE=InnoDB;
                       
CREATE TABLE TRACK (id_TRACK INT(64) AUTO_INCREMENT NOT NULL, 
                    title_TRACK VARCHAR(224), 
                    artist_TRACK VARCHAR(224), 
                    album_TRACK VARCHAR(512), 
                    url_TRACK VARCHAR(512), 
                    cover_TRACK VARCHAR(512), 
                    PRIMARY KEY (id_TRACK)) ENGINE=InnoDB;
                    
CREATE TABLE MOOD (id_MOOD INT(64) AUTO_INCREMENT NOT NULL, 
                   name_MOOD VARCHAR(64), 
                   description_MOOD VARCHAR(1024), 
                   PRIMARY KEY (id_MOOD)) ENGINE=InnoDB;
                   
CREATE TABLE WEATHER (id_WEATHER INT(64) AUTO_INCREMENT NOT NULL, 
                      type_WEATHER VARCHAR(224), 
                      temperature_WEATHER INT(64),
                      city_WEATHER VARCHAR(224), 
                      description_WEATHER VARCHAR(512), 
                      PRIMARY KEY (id_WEATHER)) ENGINE=InnoDB;
