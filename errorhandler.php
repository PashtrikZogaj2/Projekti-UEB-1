<?php
// Error handling function
function customError($errno, $errstr, $errfile, $errline) {
    $error_message = "Error: [$errno] $errstr - $errfile:$errline";
    
    // Log error to a file
    error_log($error_message, 3, 'errors.log');
    
    // Display user-friendly message
    echo "An error occurred. Please try again later. $error_message";
}

// Exception handling function
function customException($exception) {
    $error_message = "Uncaught exception: " . $exception->getMessage() . " in " . $exception->getFile() . ":" . $exception->getLine();
    
    // Log exception to a file
    error_log($error_message, 3, 'errors.log');
    
    // Display user-friendly message
    echo "An unexpected error occurred. Please try again later.";
}

// Shutdown function to catch fatal errors
function shutdownFunction() {
    $error = error_get_last();
    if ($error !== NULL) {
        $error_message = "Fatal error: " . $error['message'] . " in " . $error['file'] . ":" . $error['line'];
        
        // Log fatal error to a file
        error_log($error_message, 3, 'errors.log');
        
        // Display user-friendly message
        echo "A fatal error occurred. Please try again later.";
    }
}

// Set custom error handler
set_error_handler("customError");

// Set custom exception handler
set_exception_handler("customException");

// Register shutdown function
register_shutdown_function("shutdownFunction");

// Set error reporting level
error_reporting(E_ALL);

// Display errors (for development; set to 0 for production)
ini_set('display_errors', 1);
?>
