export interface Sat {
    number: string;
    rarity_ranking: string;
    offset: number;
}

export interface Inscription {
    id: string;
    offset: number;
    content_type: string;
}

export interface Result {
    txid: string;
    vout: number;
    block_height: number;
    value: number;
    sats: Sat[];
    inscriptions: Inscription[];
}

export interface Ordinals {
    limit: number;
    offset: number;
    total: number;
    results: Result[];
}