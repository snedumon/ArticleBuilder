<?php
// $request_body = file_get_contents('php://input');
// $data = json_decode($request_body, TRUE);

$data = json_decode(file_get_contents('php://input'), TRUE);

$articleHtml = '
<!doctype html>
<html>
<head>
    <title>ArticleBuilderProject</title>
    
    <link rel="stylesheet" type="text/css" href="styles.css">
<body>
    '.$data['articleHtml'].'
</body>
</html>
';

$styleCss = '
h1,h2,h3,h4,h5,h6 {
    text-align: '.$data["h1h6Styles"]["textAlign"].';
    font-weight: '.$data["h1h6Styles"]["fontWeight"].';
    font-style: '.$data["h1h6Styles"]["fontStyle"].';
}

h1 {
    font-size: '.$data["h1h6Styles"]["h1Size"].'px;
}

h2 {
    font-size: '.$data["h1h6Styles"]["h2Size"].'px;
}

h3 {
    font-size: '.$data["h1h6Styles"]["h3Size"].'px;
}

h4 {
    font-size: '.$data["h1h6Styles"]['h4Size'].'px;
}

h5 {
    font-size: '.$data["h1h6Styles"]["h5Size"].'px;
}

h6 {
    font-size: '.$data["h1h6Styles"]["h6Size"].'px;
}

p {
    text-align: '.$data["pStyles"]["textAlign"].';
    font-weight: '.$data["pStyles"]["fontWeight"].';
    font-style: '.$data["pStyles"]["fontStyle"].';
    font-size: '.$data["pStyles"]["pSize"].'px;

}
';

$articleId = md5($articleHtm . $styleCss);

$zipname = 'ArticleBuilderProject.'.$articleId.'.zip';
$zip = new ZipArchive;
if ($zip->open($zipname, ZipArchive::CREATE) === TRUE) {
    $zip->addFromString('ArticleBuilderProject/index.html', $articleHtml);
    $zip->addFromString('ArticleBuilderProject/styles.css', $styleCss);
    
    $zip->close();
} else {
    die ("Could not open archive");
}

echo 'http://articleBuilder.com/'.$zipname;

$zip->close();



// print_r($styleCss);
?>
