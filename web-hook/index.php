<?php
use GuzzleHttp\Client;

try {

    $endpoint = getenv('ZAPIER_WEB_HOOK');
    $client = new Client();

    $client->request('POST', $endpoint, [
        'json' => [
            'id' => 1,
            'full_name' => 'Juan dela Cruz',
            'mobile_number' => 1234567890,
            'email' => 'email@email.com',
            'created_at' => '1970-01-01 00:00:01'
        ]
    ]);

} catch (Exception $exception) {

    echo 'Something went wrong: ' . $exception->getMessage();

}
