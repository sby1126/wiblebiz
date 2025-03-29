import { consultData, usageData } from '@/constants/data'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
    const params = req.nextUrl.searchParams
    const query = params.get('tab')
    const item = query == 'CONSULT' ? consultData : usageData
    return NextResponse.json(item)
}
