<?php
session_start();
$errors = $_SESSION['errors'] ?? [];
$old = $_SESSION['old'] ?? [];
unset($_SESSION['errors'], $_SESSION['old']);
?>
<!DOCTYPE html>
<html>
<body>
<form action="formValidation.php" method="POST">
<input type="text" name="username" value="<?= $old['username'] ?? '' ?>">
<span><?= $errors['username'] ?? '' ?></span><br>

<input type="text" name="name" value="<?= $old['name'] ?? '' ?>">
<span><?= $errors['name'] ?? '' ?></span><br>

<input type="text" name="email" value="<?= $old['email'] ?? '' ?>">
<span><?= $errors['email'] ?? '' ?></span><br>

<input type="text" name="phone" value="<?= $old['phone'] ?? '' ?>">
<span><?= $errors['phone'] ?? '' ?></span><br>

<button type="submit">Submit</button>
</form>
</body>
</html>