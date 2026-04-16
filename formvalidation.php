<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

$username = trim($_POST['username'] ?? '');
$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$phone = trim($_POST['phone'] ?? '');

$errors = [];

if ($username === '') $errors['username'] = "Required";
if ($name === '') $errors['name'] = "Required";
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) $errors['email'] = "Invalid";
if ($phone === '' || !preg_match('/^[0-9]{10,15}$/', $phone)) $errors['phone'] = "Invalid";

if (!empty($errors)) {
$_SESSION['errors'] = $errors;
$_SESSION['old'] = $_POST;
header("Location: form.php");
exit();
}

echo $username . "<br>";
echo $name . "<br>";
echo $email . "<br>";
echo $phone . "<br>";
}
?>