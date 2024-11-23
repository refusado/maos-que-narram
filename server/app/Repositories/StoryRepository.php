<?php 

namespace App\Repositories;

use App\Models\Story;

class StoryRepository implements BaseRepositoryInterface
{
    public function findById($id)
    {
        return Story::findOrFail($id);
    }

    public function all()
    {
        return Story::all();
    }

    public function create(array $data)
    {
        return Story::create($data);
    }

    public function update($id, array $data)
    {
        $story = $this->findById($id);
        $story->update($data);
        return $story;
    }

    public function delete($id)
    {
        $story = $this->findById($id);
        return $story->delete();
    }
}

