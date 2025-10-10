// Utilities for working with file and directory fs
import fs from 'fs';

// Utilities for working with file and directory paths
import path from 'path';

// Directory where the JSON data file is stored
const dataDir = path.join(process.cwd(), 'data');

// Reads the JSON file, parses it, sorts posts by title, and returns
// an array of post objects with `id`, `title`, and `date` fields.
export function getSortedPostsData() {
    const filePath = path.join(dataDir, 'posts.json');
    const jsonString = fs.readFileSync(filePath, 'utf8');
    const jsonObj = JSON.parse(jsonString);
    jsonObj.sort(function (a, b) {
        return a.title.localeCompare(b.title);
    });
  return jsonObj.map(item => {
    return {
        id: item.id.toString(),
        title: item.title,
        date: item.date
    }
  });
}

// Returns an array of possible post IDs (as strings) for dynamic routing.
export function getAllPostIds() {
    const filePath = path.join(dataDir, 'posts.json');
    const jsonString = fs.readFileSync(filePath, 'utf8');
    const jsonObj = JSON.parse(jsonString);
    console.log(jsonObj);
    return jsonObj.map(item => {
        return {
            params: {
                id: item.id.toString()
            }
        }
    });

}

// Fetches and returns post data for a given `id`.
export function getPostData(id) {
    const filePath = path.join(dataDir, 'posts.json');
    const jsonString = fs.readFileSync(filePath, 'utf8');
    const jsonObj = JSON.parse(jsonString);
    const objReturned = jsonObj.filter(obj => {
        return obj.id.toString() === id;
    });
    if (objReturned.length === 0) {
        return {
            id: id,
            title: 'Not Found',
            date: '',
            contentHtml: 'Not Found'
        }
        } else {
        return objReturned[0];
    }
}