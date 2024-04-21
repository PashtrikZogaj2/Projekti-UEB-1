<?php
session_start();

function incrementVisitCount($key) {
    if (!isset($_SESSION[$key]) && !isset($_COOKIE[$key])) {
        $_SESSION[$key] = 1;
        setcookie($key, 1, time() + 3600 * 24 * 30); // E vendos ni cookie per 30 dit
    } else {
        if (!isset($_COOKIE[$key])) {
            $_SESSION[$key]++;
            setcookie($key, $_SESSION[$key], time() + 3600 * 24 * 30); // e bon update cookien paraprak me ni vler tre
        }
    }
}

function getVisitCount($key) {
    return isset($_SESSION[$key]) ? $_SESSION[$key] : (isset($_COOKIE[$key]) ? $_COOKIE[$key] : 0);
}

incrementVisitCount('page_visits');
$pageVisits = getVisitCount('page_visits');

?>

