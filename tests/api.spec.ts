import { test, expect } from '@playwright/test';

test.describe('ParaBank API Testing', () => {

    // Notice the parameter is { request }, NOT { page }!
    test('Log in via Backend API', async ({ request }) => {
        
        console.log('🚀 Firing request directly to the database...');

        // 1. THE API CALL: We hit the server's hidden login endpoint directly.
        const response = await request.get('https://parabank.parasoft.com/parabank/services/bank/login/john/demo', {
            headers: {
                // ParaBank is old and likes XML. We force it to speak modern JSON.
                'Accept': 'application/json' 
            }
        });

        // 2. THE STATUS CHECK: Did the server accept our request? (HTTP 200 = OK)
        expect(response.status()).toBe(200);

        // 3. THE DATA PARSE: Read the raw JSON data the server sent back
        const responseBody = await response.json();
        
        console.log('✅ Server replied with user data:');
        console.log(responseBody);

        // 4. THE ASSERTIONS: Read the flat JSON object directly
        expect(responseBody.firstName).toBe('John');
        expect(responseBody.lastName).toBe('Smith');
        expect(responseBody.id).toBeDefined();
    });

});