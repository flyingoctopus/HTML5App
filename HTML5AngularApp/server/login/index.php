<?php
include '../AJAXServer.php';

class Server extends AJAXServer {
	// ========================================================================
	//
	// MAIN Handler to process POST requests
	//

	public function handleAction( $request ) {

		// The 'action' requested is named for the folder this server lives in
		
		$username = $request['name'];
		$passwd = $request['passwd'];
	
		// Authenticate with username and password
		
		
		$response["id"] = password_hash( $passwd, PASSWORD_DEFAULT );	
		$response["error"] = 0;

		return json_encode( $response );
	}
}

$myServer = new Server();
?>