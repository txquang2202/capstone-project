'use client';

import CompanyCard from "@/components/CompanyPage/CompanyCard";
import CompanyBody from "@/components/CompanyPage/CompanyBody";

export default function CompanyPage() {
    return (
        <main className="companies-landing-container">
            <CompanyCard/>
            <CompanyBody/>
        </main>
    );
};
