//WIP
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RegistrationForm } from '../../registration/src/components/RegistrationForm';


describe('RegistrationForm Component', () => {
    // Initial render
    test('renders the first step correctly', () => {
        render( < RegistrationForm / > );
        // Check for elements that are unique to the first step
        expect(screen.getByRole('heading', { name: /Welcome to Shine Coin Tech/i })).toBeInTheDocument();
    });

    // Navigation
    test('navigates to the next step correctly', () => {
        render( < RegistrationForm / > );
        const nextButton = screen.getByRole('button', { name: /Proceed/i });
        fireEvent.click(nextButton);
        // Assuming StepTwo contains a unique element or text
        expect(screen.getByText(/cool name/i)).toBeInTheDocument(); // Adjust based on actual content
    });

    test('navigates to the previous step correctly after moving to the next step', () => {
        render( < RegistrationForm / > );
        const nextButton = screen.getByRole('button', { name: /Proceed/i });
        fireEvent.click(nextButton); // Move to Step 2
        const backButton = screen.getByRole('button', { name: /↩/i }); // Adjust based on actual content
        fireEvent.click(backButton); // Move back to Step 1
        expect(screen.getByRole('heading', { name: /Welcome to Shine Coin Tech/i })).toBeInTheDocument();
    });

    // Step Indicators
    test('updates step indicators correctly when moving to the next step', () => {
        render( < RegistrationForm / > );
        const nextButton = screen.getByRole('button', { name: /Proceed/i });
        fireEvent.click(nextButton); // Move to Step 2
        const activeIndicators = screen.getAllByClassName('rect-indicator--active');
        expect(activeIndicators.length).toBeGreaterThan(1); // More than one indicator should be active
    });

    test('updates step indicators correctly when moving back to the previous step', () => {
        render( < RegistrationForm / > );
        const nextButton = screen.getByRole('button', { name: /Proceed/i });
        fireEvent.click(nextButton); // Move to Step 2
        const backButton = screen.getByRole('button', { name: /↩/i }); // Adjust based on actual content
        fireEvent.click(backButton); // Move back to Step 1
        const activeIndicators = screen.getAllByClassName('rect-indicator--active');
        expect(activeIndicators).toHaveLength(1); // Only one indicator should be active
    });

    // Total Steps
    test('displays the correct total number of steps', () => {
        render( < RegistrationForm / > );
        expect(screen.getByText(/Step 1 \/ 5/i)).toBeInTheDocument(); // To be adjusted based on the total number of steps
    });

});