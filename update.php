<?php
                    // Establish a connection to MySQL database server
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
                // Establish a connection to MySQL database server
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
                        echo "<form action='' method='post'>"; // This form action will be updated by JavaScript
                        echo "<input type='hidden' name='userid' value='" . $row['id'] . "'>";
                        echo "<span class='details'>Full Name: </span><input type='text' name='fullname' value='" . $row['fullname'] . "'><br>";
                        echo "<span class='details'>Username: </span><input type='text' name='username' value='" . $row['username'] . "'><br>";
                        echo "<span class='details'>Email: </span><input type='email' name='email' value='" . $row['email'] . "'><br>";
                        echo "<span class='details'>Phone Number: </span><input type='text' name='phone' value='" . $row['phone'] . "'><br>";
                        echo "<span class='details'>Gender: </span><input type='text' name='gender' value='" . $row['gender'] . "'><br>";
                        echo "<div class='button'>";
                        echo "<input type='submit' name='update' value='Update User'>";
                        echo "</div>";
                        echo "</form>";
                        echo "</div>";
                    }
                    echo "</div>";
                } else {
                    echo "No user found with the selected ID.";
                }

                $conn->close();
            }
        }

        // PHP code for updating the user
        if (isset($_POST['update'])) {
            $selectedUserId = $_POST['userid'];
            $fullname = $_POST['fullname'];
            $username = $_POST['username'];
            $email = $_POST['email'];
            $phone = $_POST['phone'];
            $gender = $_POST['gender'];
            
            // Establish a connection to MySQL database server
            $conn = new mysqli($servername, $username, $password, $dbname);

            // Check connection
            if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            }

            // Update user data in the database based on the selected user ID
            $sql_update_user = "UPDATE users SET fullname='$fullname', username='$username', email='$email', phone='$phone', gender='$gender' WHERE id='$selectedUserId'";
            if ($conn->query($sql_update_user) === TRUE) {
                echo "User information updated successfully.";
            } else {
                echo "Error updating user information: " . $conn->error;
            }

            $conn->close();
        }
        ?>
