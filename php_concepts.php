<?php //lorik

// Perdorimi i varibalave ne PHP
$websiteTitle = "Real Estate Experts You Can Trust";
$logoImage = "Realtor-com-Logo.svg";

// Qasja ne variabla
echo "<h1 style='text-align: center; font-family: Arial, sans-serif; color: #333;'>$websiteTitle</h1>";
echo "<ul>";
echo "<li>Website Title: $websiteTitle</li>";
echo "<li>Logo Image: $logoImage</li>";
echo "</ul>";

// Perdorimi i var_dump() per te dhene informata shtese 
echo "<p style='margin-top: 20px;'>var_dump() Output:</p>";
echo "<pre>";
echo "Website Title: ";
var_dump($websiteTitle);
echo "\nLogo Image: ";
var_dump($logoImage);
echo "</pre>";

// Perdorimi i nje funksioni 
echo "<p style='margin-top: 20px;'>Function: Generate Random Property ID</p>";
function generateRandomPropertyId() {
$prefix = "PROP-";
return $prefix . strtoupper(substr(md5(uniqid()), 0, 6));
}
$propertyId = generateRandomPropertyId();
echo "Random Property ID: $propertyId<br>";

// Funksioni String dhe perdorimi i tij query
echo "<p style='margin-top: 20px;'>String Function: Convert Feature Names to Title Case</p>";
$featureList = "swimming pool, gym, balcony";
$titleCaseFeatures = ucwords($featureList);
echo "Features (Title Case): $titleCaseFeatures<br>";

// Perdorimi i konstantave
define("COMPANY_EMAIL", "info-realtor@realestate.com");
echo "<p style='margin-top: 20px;'>Constant: Company Email Address</p>";
echo "Company Email: " . COMPANY_EMAIL . "<br>";

// Operatoret matematik per llogaritje te normes se komisionit te nje Real Estate Property!
echo "<p style='margin-top: 20px;'>Operators: Calculate Commission</p>";
$commissionRate = 0.05;
$salePrice = 1000000;
$commissionAmount = $salePrice * $commissionRate;
echo "Commission Earned: $" . number_format($commissionAmount, 2, '.', ',') . "<br>";
?>
