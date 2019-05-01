/*****************************************************************
 * UNA Radio React Native Application
 * For UNA Course CS-455, Spring 2019
 * 
 * Author: David Marsh
 * Assisting programmer: Michael Lee Brummitt
 * 
 * Purpose: This program is the client side of an audio streaming application.
 * 		This application fetches an audio stream from a node server and plays it
 * 		with the built in audio player. For simplicity, this project was created
 * 		using the Expo development environment. Currently, audio and image URLs
 * 		are built in as PlaylistItem objects. To create a new track, follow the
 * 		format of the provided playlist items below, and make sure that the database
 * 		on the server is updated accordingly. 
 * 
 * 		To run this program:
 * 		1. Ensure that URLs in the playlist (this file) are up-to-date.
 * 			NOTE: they are currently NOT static URLs. They will need to be updated before use.
 * 			When testing on a local machine:
 * 				localhost:8080/
 * 			When testing on an external device:
 * 				(IP of server host):8080/   OR
 * 				(custom URL of a forwarding service)/
 * 			Audio URLs will end in /station while images may be from the web or from /art/(SONGNAME).mp3
 * 		2. Run '$ node server.js' in the Server folder to launch the server
 * 		3. Run '$ expo start' in the parent folder of this file to launch the Expo development environment
 * 		4. Follow onscreen instructions to launch application on an emulator or on a real device. 
 *****************************************************************/
