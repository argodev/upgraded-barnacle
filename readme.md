# Python Flask + Angular Demo

This is a very simple demo for a project showing a python flask server running with an Angular JS client connected. In order to run the app, simply navigate to the `site` directory and run `$ python webapp.py`. After the web server starts, you should be able to browse to `http://localhost:5000` and view the site.

Most of this is mocked up to be mildly interesting yet smoke-and-mirrors. However, there is a "live" data call/API thing going on.

If you look at webapp.py, you will find it contains two main methods... `index()` which is the default web handler and sends the single page application (SPA) down from the server to the browser, and `sample_db_get()` which handles `GET` requests to `http://localhost:5000/api/sampledb`. A quick review of this method shows that all it does is return an array of objects in JSON format. This is consumed by the web app and displayed in the table located at `http://localhost:5000/

## Eye Candy
The entire site is responsive, meaning it should look good on a tablet and/or phone. I'd use both in a demo (at least the chrome dev tools to show off).

If you go to Shiny SDR --> Spectrum you will get an idea of what the SpecA could look like

If you go to `Log` in the left-hand menu you get a table that is populated via the web api call back to `/api/sampledb/`. 