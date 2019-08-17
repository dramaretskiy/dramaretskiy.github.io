<?
    require "vendor/autoload.php";

    $robo = 'robot@example.com';

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
if ((isset($_POST['first-name']) && $_POST['first-name'] != "") && (isset($_POST['last-name']) && $_POST['last-name'] != "") && (isset($_POST['email']) && $_POST['email'] != "") && (isset($_POST['subject']) && $_POST['subject'] != "") && (isset($_POST['message']) && $_POST['message'] != "")) {



    $developmentMode = false;
    $mailer = new PHPMailer($developmentMode);

    try {
        $mailer->SMTPDebug = 2;
        $mailer->isSMTP();

        if ($developmentMode) {
        $mailer->SMTPOptions = [
            'ssl'=> [
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
            ]
        ];
        }

        // SMTP Settings
        $mailer->Host = 'ded1354.inmotionhosting.com';
        $mailer->SMTPAuth = true;
        $mailer->Username = 'noreply@theagencycreates.com';
        $mailer->Password = 'v[!g=SrQ^BT^';
        $mailer->Port = 25;
        //-----------------

        $mailer->SMTPSecure = 'tls';
        $mailer->setFrom('noreply@theagencycreates.com', 'Name of addresser'); // addresser
        $mailer->addAddress('Karine.Aslanian@TheAgencyRE.com'); //recipient

        $mailer->isHTML(true);
        $mailer->Subject = $_POST['subject'];
        $mailer->Body = '
                <html>
                    <head>
                        <title>' . $subject . '</title>
                    </head>
                    <body>
                        <p>First Name: ' . $_POST['first-name'] . '</p>
                        <p>Last Name: ' . $_POST['last-name'] . '</p>
                        <p>Email: ' . $_POST['email'] . '</p>
                        <p>Mesage: ' . $_POST['message'] . '</p>
                    </body>
                </html>';

        $mailer->send();
        $mailer->ClearAllRecipients();
        echo "MAIL HAS BEEN SENT SUCCESSFULLY";
        die(json_encode(array('message' => 'OK', 'code' => 200)));

    } catch (Exception $e) {
        echo "EMAIL SENDING FAILED. INFO: " . $mailer->ErrorInfo;
    }
} else {
    header('HTTP/1.1 500 Internal Server Booboo');
    header('Content-Type: application/json; charset=UTF-8');
    die(json_encode(array('message' => 'ERROR', 'code' => 1337)));
}
