<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="registration.css">
    <script src="script.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Account Information</title>
</head>
<body>
    <div class="container">
        <div class="title">Account Information</div>
        <form action="" method="post">
            <div class="input-box">
                <span class="details">Select User ID:</span>
                <select name="userid">
                    <?php
                    // Step 1: Establish a connection to MySQL database server
                    $servername = "localhost";
                    $username = "root";
                    $password = "Pashtrik12@@"; // Use your MySQL password here
                    $dbname = "mydatabase"; // Choose the name of your database

                    $conn = new mysqli($servername, $username, $password, $dbname);

                    // Check connection
                    if ($conn->connect_error) {
                        die("Connection failed: " . $conn->connect_error);
                    }

                    // Fetch user IDs from the database
                    $sql = "SELECT id FROM users";
                    $result = $conn->query($sql);

                    if ($result->num_rows > 0) {
                        while ($row = $result->fetch_assoc()) {
                            echo "<option value='" . $row['id'] . "'>" . $row['id'] . "</option>";
                        }
                    } else {
                        echo "<option value=''>No users found</option>";
                    }

                    $conn->close();
                    ?>
                </select>
            </div>
            <div class="button">
                <input type="submit" name="submit" value="Fetch Information">
            </div>
        </form>

        <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            if (isset($_POST['submit'])) {
                $selectedUserId = $_POST['userid'];
                // Step 1: Establish a connection to MySQL database server
                $conn = new mysqli($servername, $username, $password, $dbname);

                // Check connection
                if ($conn->connect_error) {
                    die("Connection failed: " . $conn->connect_error);
                }

                // Fetch user data from the database based on the selected user ID
                $sql = "SELECT * FROM users WHERE id = '$selectedUserId'";
                $result = $conn->query($sql);

                if ($result->num_rows > 0) {
                    echo "<div class='user-details'>";
                    while ($row = $result->fetch_assoc()) {
                        echo "<div class='input-box'>";
                        echo "<span class='details'>Full Name: </span>" . $row['fullname'] . "<br>";
                        echo "<span class='details'>Username: </span>" . $row['username'] . "<br>";
                        echo "<span class='details'>Email: </span>" . $row['email'] . "<br>";
                        echo "<span class='details'>Phone Number: </span>" . $row['phone'] . "<br>";
                        echo "<span class='details'>Gender: </span>" . $row['gender'] . "<br>";
                        echo "</div>";
                    }
                    echo "</div>";

                    // Add a form for deleting the user
                    echo "<form action='' method='post'>";
                    echo "<input type='hidden' name='userid' value='" . $selectedUserId . "'>";
                    echo "<div class='button'>";
                    echo "<input type='submit' name='delete' value='Delete User'>";
                    echo "</div>";
                    echo "</form>";
                } else {
                    echo "No user found with the selected ID.";
                }

                $conn->close();
            }
        }

        // PHP code for deleting the user
        if (isset($_POST['delete'])) {
            $selectedUserId = $_POST['userid'];
            // Step 1: Establish a connection to MySQL database server
            $conn = new mysqli($servername, $username, $password, $dbname);

            // Check connection
            if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            }

            // Delete user data from the database based on the selected user ID
            $sql_delete_user = "DELETE FROM users WHERE id = '$selectedUserId'";
            if ($conn->query($sql_delete_user) === TRUE) {
                echo "User deleted successfully.";
            } else {
                echo "Error deleting user: " . $conn->error;
            }

            $conn->close();
        }
        ?>

        <div class="button">
            <button onclick="location.href='registration.php'">Back to Registration</button>
        </div>
    </div>
</body>
</html>
