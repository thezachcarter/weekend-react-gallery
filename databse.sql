CREATE TABLE "images"(
"id" SERIAL PRIMARY KEY,
"path" VARCHAR(200),
"description" VARCHAR(200),
"likes" INT
);

INSERT INTO "public"."images"("id","path","description","likes")
VALUES
(1,E'images/gordoCoat.jpg',E'in his winter coat.',0),
(2,E'images/gordoDock.jpg',E'on a dock at the lake.',0),
(3,E'images/gordoFace.jpg',E'extremely close up.',0),
(4,E'images/gordoSnack.jpg',E'eating a snack.',0),
(5,E'images/gordoSleep.jpg',E'sleeping on the couch.',0),
(6,E'images/gordoStand.jpg',E'standing on a chair.',0),
(7,E'images/gordoRun.jpg',E'running with a toy.',0),
(8,E'images/gordoPet.jpg',E'being pet.',0),
(9,E'images/gordoCar.jpg',E'in the car.',0),
(10,E'images/gordoTug.jpg',E'playing tug of war.',0);