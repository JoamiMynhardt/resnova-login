export interface WidgetI{
    id: string,
    user_id: string | number,
    description?: string,
    name?:string,
    updated?:number | string,
    config: {
        "description": string,
        "link_style": string,
        show_property_thumbnail: boolean,
        "button_colour": string,
        "button_text_colour": string,
        "button_hover_colour": string,
        "button_hover_text_colour": string,
        "contact_email": string,
        "additional_email": string,
        "enable_bookings": boolean,
        "enable_card_payments": boolean,
        "payment_gateway_api": string,
        "payment_gateway_config": {
            "merchant_id": string,
            "hash_value": string,
            "access_code": string
        },
        "module": string,
        "display_days": number|string,
        "matrix_mode": string,
        "available_text": string,
        "unavailable_text": string,
        "principals": [
            {
                "id": string,
                "properties": [
                    {
                        "id": string,
                        "no_children_allowed": boolean
                    },
                ]
            }
        ],
        "can_pay_later": true,
        "can_pay_full": true,
        "principal_source_maps": []
    },
    custom_css?: string,
    version?: string,
    created_at?: string,
    updated_at?: string,
    edited?: boolean
}
export interface eventI {
    target: {
        checked: boolean
    }
}

export interface PaymentMethodsI {
            id: number,
            name: string,
            aviable?: number,
            created_at?: string,
            updated_at?: string,
            slug?: string,
            payment_fields?: [
                {
                    id: number,
                    payment_id: number,
                    title: string,
                    field_name:string,
                    created_at: string,
                    updated_at: string
                }
            ]

}


export interface PaymentFieldsI{
            id: number,
            payment_id: number,
            title: string,
            field_name:string,
            created_at: string,
            updated_at: string
}

export interface PropertySourcesI{
    id: string,
    name: string
}
