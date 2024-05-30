<?php
if (isset($_SESSION["name"])) {
    $display = '<p id="myParagraph" onclick="changeParagraph()">Welcome, ' . $_SESSION["name"] . '</p>
    <form action="destroy_session.php" method="post">
    <input type="submit" class="sobutton" name="destroy_session" value="Not you? Sign out">
    </form>';
}
else{
    $display = '<p id="myParagraph" onclick="changeParagraph()">Register now for free</p>
             <button id="shbutton">Sign up</button>';
}

echo $display;
?>