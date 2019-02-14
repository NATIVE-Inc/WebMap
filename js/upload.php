<?php
include("config.php");

$title = $_POST["title"];
$descr = $_POST["descr"];


if ($_FILES["file"]["error"] > 0) {
    echo "Return Code: " . $_FILES["file"]["error"] . "<br>";
} 
else {
    $filename = $label.$_FILES["file"]["name"];
    echo "Upload: " . $_FILES["file"]["name"] . "<br>";
    echo "Type: " . $_FILES["file"]["type"] . "<br>";
    echo "Size: " . ($_FILES["file"]["size"] / 1024) . " kB<br>";
    echo "Temp file: " . $_FILES["file"]["tmp_name"] . "<br>";

    // putting file into folder
    if (file_exists("layers/" . $filename)) {
        echo $filename . " already exists. ";
    } else {
        move_uploaded_file($_FILES["file"]["tmp_name"],
        "layers/" . $filename);
        echo "Stored in: " . "layers/" . $filename;

        // sending file name into database
        $sql = " INSERT INTO `cartes` (`id`, `nom`, `titre`, `description`) VALUES (NULL, '$filename', '$title', '$descr')";
        $result = mysqli_query($connect, $sql); 

        if($result === false){
          // do nothing
          echo("<script>console.log('PHP: sql failed ');</script>");
        }
        else {
          echo("<script>console.log('PHP: sql success');</script>");
        }
        
    }


}
?>