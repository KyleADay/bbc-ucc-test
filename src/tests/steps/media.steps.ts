import { Given, When, Then } from "@cucumber/cucumber";
import { request } from "playwright";
import { expect } from "@playwright/test";

const baseURL = 'https://testapi.io/api/ottplatform'

Given('I have access to the API', async function () {
  this.apiContext = await request.newContext();
});

When('I make a GET request to the {string} endpoint', async function (endPoint) {
  const startTime = Date.now();
  this.response = await this.apiContext.get(baseURL + endPoint);
  this.responseTime = Date.now() - startTime;
  this.responseHeader = await this.response.headers();
  this.responseJSON = await this.response.json();
  this.data = this.responseJSON.data;
});

Then('it should return status code {int}', async function (statusCode) {
  expect((await this.response).status()).toBe(statusCode);
});

Then('it should be less than {string} ms', async function (expectedTime) {
  expect(await this.responseTime).toBeLessThan(Number(expectedTime));
});

Then('the {string} field should not be null or empty', async function (field) {
  for (let i = 0; i < this.data.length; i++) {
    expect(this.data[i][field]).not.toBeNull();
    expect(this.data[i][field]).not.toBe("");
  }
});

Then('only one track is now playing', async function () {
  let nowPlayingCount = 0;

  for (let i = 0; i < this.data.length; i++) {
    if (this.data[i].offset.now_playing === true) {
      nowPlayingCount++;
    }
  }
  expect(nowPlayingCount).toBe(1);
});

Then('the current date is in the response header', async function () {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-GB', {
    weekday: 'short',
    day: 'numeric',
    month: 'long',
  });
  expect(this.responseHeader.date).toBe(formattedDate);
});