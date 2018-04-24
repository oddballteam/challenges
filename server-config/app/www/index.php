<?php 
require 'vendor/autoload.php';

$dotenv = new Dotenv\Dotenv(__DIR__);
$dotenv->load();

$logger = Elasticsearch\ClientBuilder::defaultLogger('/var/log/elastic_search.log');

$hosts = [
    [
        'host' => 'localhost',
    ]
];

$client = Elasticsearch\ClientBuilder::create();
$client->setLogger($logger);
$client->setHosts($hosts);
$client->build();

$host = getenv("DB_HOST");
$user = getenv("DB_USER");
$pass = getenv("DB_PASS");
$db   = 'test';
$charset = 'utf8';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$opt = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

$pdo = new PDO($dsn, $user, $pass, $opt);
$stmt = $pdo->query('SELECT 1 + 1 as result '); 

while ($row = $stmt->fetch())
{
    echo $row['result'] . "\n";
}

?>
