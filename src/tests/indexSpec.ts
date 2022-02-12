import supertest from 'supertest';
import app from '../index';
import checkFileExist from '../utilities/file_checker';
import resizeImage from '../utilities/sharp';

// test endpoint
const request = supertest(app);
describe('1- Test Endpoint Response', () => {
  it('expect response status to be 200 for the get endpoint /api', async () => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
  });
  it('expect response status to be 200 for the get endpoint api/images?filename=encenadaport&width=500&height=100', async () => {
    const response = await request.get(
      '/api/images?filename=encenadaport&width=500&height=100'
    );
    expect(response.status).toEqual(200);
  });
  it('expect endpoint get api/images?filename=encenadaport&width=500&height=100 responds with image/jpeg', async function () {
    await request
      .get('/api/images?filename=encenadaport&width=500&height=100')
      .expect('Content-Type', 'image/jpeg')
      .expect(200);
  });
  it('expect a message when enter a wrong filename', async () => {
    const response = await request.get(
      '/api/images?filename=seaImg&width=500&height=100'
    );
    expect(response.text).toBe('Please, Enter a valid filename');
  });
  it('expect a message when enter a wrong width and height', async () => {
    const response = await request.get(
      '/api/images?filename=encenadaport&width=kk&height=yy'
    );
    expect(response.text).toBe(
      'Please, Enter a valid number for width and height'
    );
  });
});

describe('2- Test utilities functions ', () => {
  it('expect checkFileExist functin to return false with file name img_100x3030.jpg', () => {
    expect(checkFileExist('img_100x200.jpg', 'thumb')).toBeFalse();
  });
  it("expect checkFileExist functin to return true with file name icelandwaterfall.jpg doesn't exist in thumb folder", () => {
    expect(checkFileExist('icelandwaterfall.jpg', 'thumb')).not.toBe(true);
  });
  it('expect checkFileExist functin to return true with file name icelandwaterfall.jpg exist in images folder', () => {
    expect(checkFileExist('icelandwaterfall.jpg', 'images')).toBe(true);
  });
  it('expect resizeImage functin to be defined', () => {
    expect(resizeImage).toBeDefined();
  });
  it("expect resizeImage functin to return the 'assets/thumb/icelandwaterfall_500x300.jpg' path of icelandwaterfall.jpg with width=500 and height=300", async () => {
    const resizeImageResult = await resizeImage('icelandwaterfall', 500, 300);
    expect(resizeImageResult).toEqual(
      'assets/thumb/icelandwaterfall_500x300.jpg'
    );
  });
});
