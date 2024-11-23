<?php

namespace App\Exceptions;

use Exception;

class CustomException extends Exception
{
    protected $message;

    public function __construct($message = "An error occurred", $code = 400)
    {
        parent::__construct($message, $code);
    }

    public function render($request)
    {
        return response()->json([
            'error' => $this->getMessage()
        ], $this->getCode());
    }
}
