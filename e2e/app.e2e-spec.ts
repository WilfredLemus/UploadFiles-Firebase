import { UploadFilesFirebasePage } from './app.po';

describe('upload-files-firebase App', () => {
  let page: UploadFilesFirebasePage;

  beforeEach(() => {
    page = new UploadFilesFirebasePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
