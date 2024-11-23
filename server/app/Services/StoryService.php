<?php

namespace App\Services;

use App\Repositories\StoryRepository;
use App\Exceptions\CustomException;

class StoryService
{
    protected $repository;

    public function __construct(StoryRepository $repository)
    {
        $this->repository = $repository;
    }

    public function createStory(array $data)
    {
        return $this->repository->create($data);
    }

    public function getStoryById($id)
    {
        $story = $this->repository->findById($id);

        if (!$story) {
            throw new CustomException("Story not found", 404);
        }

        return $story;
    }
}
